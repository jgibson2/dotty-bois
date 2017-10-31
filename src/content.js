walk(document.body);


function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	
	if(("tagName" in node) && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea')) {
		return;
	}
	

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
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

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bDots\b/g, "Dotty Bois");
	v = v.replace(/\bdots\b/g, "dotty bois");
	v = v.replace(/\bDot\b/g, "Dotty Boi");
	v = v.replace(/\bdot\b/g, "dotty boi");
	
	textNode.nodeValue = v;
}

//if you've gotten this far message me the word "tangerine" and I'll give you a surprise