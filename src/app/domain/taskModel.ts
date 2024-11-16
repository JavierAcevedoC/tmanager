export class TaskModel {
	select: boolean = false;
	name: string = "";
	description: string = "";
	due_date?: string = "";
	creation_date: Date | undefined;
}
