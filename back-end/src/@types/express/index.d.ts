declare global {
	namespace Express {
		interface Request {
			validated: object;
			decoded: string | object;
			user: iUser;
		}
	}
}

export {};

export interface iUser {
	id: string;
	name: string;
	email: string;
	password: string;
	isAdm: boolean;
	isActive: boolean;
	createdAt: Date;
	updatedAt: Date;
}
