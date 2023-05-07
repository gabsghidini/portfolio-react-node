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
	fullName: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
}
