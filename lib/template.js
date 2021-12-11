var sanitizeHtml = require('sanitize-html');

module.exports = {
  HTML: function (title, list, body, control) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href="/author">author</a>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list: function (topics) {
    var list = '<ul>';
    var i = 0;
    while (i < topics.length) {
      list = list + `<li><a href="/?id=${topics[i].id}">${sanitizeHtml(topics[i].title)}</a></li>`;
      i = i + 1;
    }
    list = list + '</ul>';
    return list;
  },
  authorSelect: function (authors, author_id) {
    var tag = '';
    authors.forEach(author => {
      var selected = '';
      if (author.id == author_id) {
        selected = ' selected';
      }
      tag += `<option value="${author.id}"${selected}>${sanitizeHtml(author.name)}</option>`

    });

    return `
    <select name="author">
    ${tag}
    </select>`;
  },
  authorTable: function (authors) {
    var tag = '<table>';
    authors.forEach(author => {
      tag += `
                        <tr>
                            <td>${sanitizeHtml(author.name)}</td>
                            <td>${sanitizeHtml(author.profile)}</td>
                            <td><a href="/author/update?id=${author.id}">update</a></td>
                            <td>
                              <form action="/author/delete_process" method="post">
                                <input type="hidden" name="id" value="${author.id}"/>
                                <button type="submit">delete</button>
                              </form>
                            </td>
                        </tr>
                        `;
    });
    tag += '</table>'
    return tag;
  }
}