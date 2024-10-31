<cfset todo = application.todoService.getTodoById(form.id)>
<cfset todo.setCompleted(!todo.getCompleted())>
<cfset application.todoService.saveTodo(todo)>
<cflocation url="../index.cfm" addtoken="false">