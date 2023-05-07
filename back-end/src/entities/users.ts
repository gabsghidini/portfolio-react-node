import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BeforeInsert,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import Contact from "./contacts";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 50 })
	fullName: string;

	@Column({
		length: 50,
		unique: true,
	})
	email: string;

	@BeforeInsert()
	hashPassword() {
		this.password = hashSync(this.password, 10);
	}

	@Column({
		length: 120,
	})
	password: string;

	@Column()
	phone: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToMany(() => Contact, (contact) => contact.user)
	contacts: Contact[];
}
