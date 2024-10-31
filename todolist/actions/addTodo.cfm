<cfset todo = entityNew("Todo")>
<cfset todo.setTitle(form.title)>
<cfset todo.setDescription(form.description)>
<cfset todo.setCreatedAt(now())>
<cfset application.todoService.saveTodo(todo)>
<cflocation url="../index.cfm" addtoken="false">