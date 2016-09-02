walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}


// This is where the magic happens
function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bOAuth\b/g, "Oprah");
	v = v.replace(/\bOAuth\b/g, "Oprah");
	v = v.replace(/\bOAuth\b/g, "Oprah");
	v = v.replace(/\bOAuth\b/g, "Oprah");
	v = v.replace(/\bOAuth\b/g, "Oprah");
	
	textNode.nodeValue = v;
}


