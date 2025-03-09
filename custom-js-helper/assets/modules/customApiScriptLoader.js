export default (callback) => {
    /**
     * Auto loading template scripts for custom-api
     * <script class="custom-api-scripts">      // class name should be as is
     *     const scriptLoad = () => {           // this is required
     *        // your script should be in here
     *     }         
     * </script>
     */
    document.querySelectorAll('script.custom-api-scripts').forEach((s, i) => {
        const newFunctionName = `scriptLoad_${i}`;
        const customApiScript = document.createElement('script');
        customApiScript.className = `custom-api-scripts-${i}`;
        customApiScript.textContent = s.textContent.replace(/\bconst\s+scriptLoad\b/, `const ${newFunctionName}`);
        document.head.appendChild(customApiScript);
        setTimeout(() => eval(newFunctionName)(), 0);
        s.remove();
        callback && callback();
    });
  }