var http = require('http');
const PORT=8080;

function handleRequest(request, response){
    response.setHeader('Content-Type', 'text/html');
    var taskListHtml =
      '<table>'
    +'<tr><td>Task 01</td></tr>'
    +'<tr><td>Task 02</td></tr>'
    +'<tr><td>Task 03</td></tr>'
    +'</table>'
    var formHtml = 
      '<form method="POST">'
    +'Task name : <input type="text" name="task"><br/><br/>'
    +'<input type="submit" value="Add new task"><br/>' 
    +'</form>';
    response.end(taskListHtml + formHtml);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});