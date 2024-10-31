<cfoutput>
    <!DOCTYPE html>
    <html>
    <head>
        <title>Todo Application</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-100">
        <div class="container mx-auto p-4">
            <h1 class="text-3xl font-bold mb-4">Todo List</h1>
            
            <!--- Add Todo Form --->
            <form action="actions/addTodo.cfm" method="post" class="mb-4">
                <div class="flex flex-row space-x-5">

                    <input type="text" name="title" placeholder="Todo Title" required 
                    class="p-2 border rounded mr-2">
                    <textarea name="description" placeholder="Description" 
                    class="p-2 border rounded mr-2"></textarea>
                    <button type="submit" class="bg-blue-500 text-white p-2 rounded">Add Todo</button>
                </div>
            </form>
            
            <!--- Display Todos --->
            <cfset todos = application.todoService.getAllTodos()>
            <div class="space-y-4">
                <cfloop array="#todos#" index="todo">
                    <div class="bg-white p-4 rounded shadow">
                        <h2 class="text-xl font-semibold">#todo.getTitle()#</h2>
                        <p class="text-gray-600">#todo.getDescription()#</p>
                        <div class="mt-2">
                            <form action="actions/toggleTodo.cfm" method="post" class="inline">
                                <input type="hidden" name="id" value="#todo.getId()#">
                                <button type="submit" class="text-blue-500">
                                    #todo.getCompleted() ? "Mark Incomplete" : "Mark Complete"#
                                </button>
                            </form>
                            <form action="actions/deleteTodo.cfm" method="post" class="inline ml-2">
                                <input type="hidden" name="id" value="#todo.getId()#">
                                <button type="submit" class="text-red-500">Delete</button>
                            </form>
                        </div>
                    </div>
                </cfloop>
            </div>
        </div>
    </body>
    </html>
    </cfoutput>