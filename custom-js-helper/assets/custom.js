const loadScript = async (timestamp) => {
    console.log('Custom script loaded! ' + (new Date(timestamp)).toLocaleString());

    /**
     * Load all modules
     */
    const allModules = await (async () => {
        try {
            const headResponse = await fetch('/assets/modules.json', { method: 'HEAD' });
            const lastModified = headResponse.headers.get('Last-Modified');
            if (!lastModified) throw new Error('Last-Modified header not found for modules.json');
    
            const jsonTimestamp = new Date(lastModified).getTime();
            const { modules: moduleFiles } = await (await fetch(`/assets/modules.json?v=${jsonTimestamp}`)).json();
            if (!Array.isArray(moduleFiles)) throw new Error('Invalid module list format.');
    
            const modules = {};
            await Promise.all(moduleFiles.map(async (file) => {
                const modulePath = `/assets/modules/${file}`;
                const fileHeadResponse = await fetch(modulePath, { method: 'HEAD' });
                const fileLastModified = fileHeadResponse.headers.get('Last-Modified');
                if (!fileLastModified) throw new Error(`Last-Modified header not found for ${file}`);
    
                const fileTimestamp = new Date(fileLastModified).getTime();
                modules[file.replace(/\.js$/, '')] = await import(`${modulePath}?v=${fileTimestamp}`);
            }));
    
            return modules;
        } catch (error) {
            console.error('Error loading modules:', error);
            return {};
        }
    })();

    // Initialize observer
    const { default: observeMutations, resetDisconnectTimer } = allModules.customObserver;
    observeMutations(() => {
        allModules.customApiScriptLoader.default(resetDisconnectTimer);
        /**
         * More can be added, pass resetDisconnectTimer function to make sure
         * the observer remains active until everything is loaded
         */
    });
};