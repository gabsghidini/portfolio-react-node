export interface UserRequest {
	fullName: string;
	email: string;
	password: string;
}

export interface User {
	id: string;
	fullName: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface UserLogin {
	email: string;
	password: string;
}

export interface UserUpdate {
	fullName?: string;
	email?: string;
	password?: string;
}

export interface NewUser {
	fullName: string;
	email: string;
	password: string;
}

export interface ReturnUser {
	updatedAt: Date;
	createdAt: Date;
	email: string;
	fullName?: string;
	id: string;
}
