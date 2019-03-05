<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    let result = [];
    if (node.nodeType == Node.ELEMENT_NODE){
      if (node.nodeName == tagName.toUpperCase()) {
        result.push(node);
      }
      for (let i = 0; i < node.childNodes.length; i++) {
        let childNodes = byTagName(node.childNodes[i], tagName);
        for(let childNode of childNodes) {
        	result.push(childNode);
        }
      }
    }
    return result;
  }
  
  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>