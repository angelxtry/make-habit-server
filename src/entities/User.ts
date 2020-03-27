import * as bcrypt from 'bcrypt';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import Habit from './Habit';

const BCRYPT_ROUND = 10;

export enum SnsDiv {
  None = 'NONE',
  Google = 'GOOGLE',
  Facebook = 'FACEBOOK',
}

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  @IsEmail()
  email: string | null;

  @Column({ type: 'boolean', default: false })
  verifiedEmail: boolean;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'text', nullable: true })
  password: string;

  @Column({ type: 'text', nullable: true })
  snsId: string;

  @Column({ type: 'enum', enum: SnsDiv, default: SnsDiv.None })
  snsDiv: SnsDiv;

  @Column({ type: 'text', nullable: true })
  profilePhoto: string;

  @OneToMany(
    () => Habit,
    (habit) => habit.owner,
  )
  habits: Habit[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUND);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      console.log(this.password);
      const hashedPassword = await this.hashPassword(this.password);
      console.log(hashedPassword);
      this.password = hashedPassword;
    }
  }

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
