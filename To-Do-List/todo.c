#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_TASKS 100
#define TASK_LENGTH 256

void addTask();
void viewTasks();
void deleteTask();
void clearTasks();
void printHeader(const char *title);

int main() {
    int choice;
    while (1) {
        printHeader("To-Do List Menu");
        printf("1. Add Task\n");
        printf("2. View Tasks\n");
        printf("3. Delete Task\n");
        printf("4. Clear All Tasks\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        getchar();

        switch (choice) {
            case 1:
                addTask();
                break;
            case 2:
                viewTasks();
                break;
            case 3:
                deleteTask();
                break;
            case 4:
                clearTasks();
                break;
            case 5:
                printf("---- Goodbye! ----\n");
                exit(0);
            default:
                printf("---- Invalid choice! Please try again. ----\n");
        }
    }
    return 0;
}
void printHeader(const char *title) {
    printf("\n---- %s ----\n", title);
    printf("------------------------------\n");
}
void addTask() {
    FILE *file = fopen("tasks.txt", "a");
    if (file == NULL) {
        printf("---- Error opening file! ----\n");
        return;
    }
    char task[TASK_LENGTH];
    printf("Enter the task: ");
    fgets(task, TASK_LENGTH, stdin);
    fprintf(file, "%s", task);
    fclose(file);
    printf("---- Task added successfully! ----\n");
}
void viewTasks() {
    FILE *file = fopen("tasks.txt", "r");
    if (file == NULL) {
        printf("---- No tasks found. ----\n");
        return;
    }
    char task[TASK_LENGTH];
    int count = 1;
    printHeader("Your Tasks");
    while (fgets(task, TASK_LENGTH, file)) {
        printf("%d. %s", count++, task);
    }
    fclose(file);
    if (count == 1) {
        printf("---- No tasks available. ----\n");
    }
}
void deleteTask() {
    FILE *file = fopen("tasks.txt", "r");
    if (file == NULL) {
        printf("---- No tasks found to delete. ----\n");
        return;
    }
    char tasks[MAX_TASKS][TASK_LENGTH];
    int count = 0, choice;
    while (fgets(tasks[count], TASK_LENGTH, file) && count < MAX_TASKS) {
        count++;
    }
    fclose(file);
    if (count == 0) {
        printf("---- No tasks available to delete. ----\n");
        return;
    }
    viewTasks();
    printf("\nEnter the task number to delete: ");
    scanf("%d", &choice);
    getchar();
    if (choice < 1 || choice > count) {
        printf("---- Invalid task number! ----\n");
        return;
    }
    file = fopen("tasks.txt", "w");
    for (int i = 0; i < count; i++) {
        if (i != choice - 1) {
            fputs(tasks[i], file);
        }
    }
    fclose(file);
    printf("---- Task deleted successfully! ----\n");
}

void clearTasks() {
    FILE *file = fopen("tasks.txt", "w");
    if (file == NULL) {
        printf("---- Error clearing tasks! ----\n");
        return;
    }
    fclose(file);
    printf("---- All tasks cleared successfully! ----\n");
}