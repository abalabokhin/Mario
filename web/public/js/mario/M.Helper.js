M = window.M || {};
M.Helper = {
	ns: function(namespace)
	{
		var prevIndex = 0;
		var nextIndex = namespace.indexOf(".", 0);
		var parent = window;

		do
		{
			nextIndex = namespace.indexOf(".", prevIndex);
			var key = nextIndex >= 0 ? namespace.substring(prevIndex, nextIndex) : namespace.substring(prevIndex);
			parent[key] = parent[key] || {};
			parent = parent[key];
			prevIndex = nextIndex + 1;
		}
		while(nextIndex >= 0);
	}
}
