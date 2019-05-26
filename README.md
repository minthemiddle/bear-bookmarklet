# Bear Bookmarklet

- Opiniated browser bookmarklet for Bear notes app 
- Allows you to quickly save references to websites in Bear
- Prompts you for tag entry to prevent unorganized Bear library
- Gets document title and URL
- Saves URL as `- Source: URL`
- Requires a recent browser like Chrome or Firefox with [ES6 String Literal support](https://caniuse.com/#feat=template-literals)

## Usage
- Just copy the content of `bear-bookmarklet.js` and create a new bookmarklet in your browser
- If you have several regular tags, just duplicate the bookmarklet and hard code the tags

## ToDo (Pull Requests welcome)
- [ ] Strips sitename from title – quick hack: everything after pipe (`|`), if existing
