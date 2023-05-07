import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
} from "typeorm";
import { User } from "./users";

@Entity("contacts")
export class Contact {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 50 })
	fullName: string;

	@Column({ length: 50 })
	email: string;

	@Column()
	phone: string;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne(() => User)
	user: User;
}
