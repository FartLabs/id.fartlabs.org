/**
 * JSON_VIEW_SRC is the source URL for the json-view script.
 */
const JSON_VIEW_SRC =
  "https://cdn.jsdelivr.net/gh/pgrabovets/json-view@master/dist/jsonview.js";

/**
 * HTML_JSON_VIEW is the HTML template for the JSON view.
 */
export const HTML_JSON_VIEW = `<!DOCTYPE html>
<html>
<head>
  <title>id.etok.me</title>
  <style>
    * {
      font-family: consolas, monospace;
    }
  </style>
</head>
<body>
  <div class="root"></div>

  <script type="text/javascript" src="${JSON_VIEW_SRC}"></script>
  <script type="text/javascript">
    fetch('/')
      .then((res)=> {
        return res.text();
      })
      .then((data) => {
        const tree = jsonview.create(data);
        jsonview.render(tree, document.querySelector('.root'));
        jsonview.expand(tree);
      })
      .catch((err) => {
        console.log(err);
      });
  </script>
</body>
</html>`;
