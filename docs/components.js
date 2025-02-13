module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"task title",
                        example:"Aprender Swagger"
                    }
                }
            },
            TaskInput: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                        description: "Task's title",
                        example: "make an excellent readme",
                    },
                    completed: {
                        type: "boolean",
                        description: "The status of the task",
                        example: false,
                    },
                },
            },
            _id: {
                type: "objectId",
                description: "An id of a task",
                example: "6201064b0028de7866e2b2c4",
            },
        }
    }
}