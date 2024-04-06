#! /usr/bin/env node 
import inquirer from "inquirer";

// Define an async function to use await with inquirer
async function main() {
    const todoList: string[] = [];

    while (true) {
        const { userTask } = await inquirer.prompt({
            name: "userTask",
            type: "input",
            message: "What would you like to add in todo list: "
        });

        const taskDescription = userTask.trim();

        if (taskDescription) {
            todoList.push(taskDescription);
            console.log(`Task added: ${taskDescription}\n`);
        } else {
            console.log("No task added.\n");
        }

        const { addMore } = await inquirer.prompt({
            name: "addMore",
            type: "confirm",
            message: "Would you like to add more tasks?"
        });

        if (!addMore) {
            console.log("Final todo list:");
            if (todoList.length === 0) {
                console.log("No tasks in the todo list.");
            } else {
                todoList.forEach((task, index) => {
                    console.log(`${index + 1}. ${task}`);
                });
            }
            break; // Exit the loop if the user doesn't want to add more tasks
        }
    }
}

// Call the main function to start the program
main().catch(error => {
    console.error("An error occurred:", error);
});
