module.exports = {
    paths: {
        "/create": {
            post: {
                tags: {
                    Tasks: "- Create a task",
                },
                description: "Create Task",
                operationId: "createTask",
                parameters: [], // params
                requestBody: { // req.body
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Task successfully created",
                    },
                    500: {
                        description: "Internal Server Error",
                    },
                },
            }
        },
        "/id/{_id}": {
            put: {
                tags: {
                    Tasks: "Update a task",
                },
                description: "Update Task",
                operationId: "updateTask",
                parameters: [ // params
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Id of Task to be updated",
                    },
                ],
                requestBody: { // req.body
                    content: {
                        "application/json": {
                            schema: { 
                                $ref: "#/components/schemas/TaskInput" 
                            },
                        },
                    },
                },
                responses: {
                    200: { description: "Task updated successfully" },
                    404: { description: "Task not found" },
                    500: { description: "Server error" },
                },
            },
        },
    },
};
