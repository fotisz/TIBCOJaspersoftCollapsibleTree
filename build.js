({
    //optimize: 'none', // Uncomment this property to disable the uglify of the libraries
    baseUrl: '',
    paths: {
			'd3': 'd3.min' , 		
			'Collapsible_Tree': 'Collapsible_Tree' 		
	}, 
		
	wrap: {
        start: "if (typeof define === 'function' && define.amd){}\nelse if (typeof __visualize__ !== 'undefined' &&\ntypeof __visualize__.define === 'function')\n{\n}\n\n(function(root){\n\nvar define = root.define;\n\n",
        end: "\n\n}(typeof __visualize__ != 'undefined' ? __visualize__ : window));"
    },
    
    name: "Collapsible_Tree",
    out: "Collapsible_Tree.min.js"
})
