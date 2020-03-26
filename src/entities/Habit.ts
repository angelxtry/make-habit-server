import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import User from './User';
import Record from './Record';

@Entity()
class Habit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // size 확인
  @Column({ type: 'text' })
  title: string;

  // size 확인
  @Column({ type: 'text' })
  content: string;

  @Column()
  startAt: Date;

  @Column()
  ownerId: number;

  @ManyToOne(() => User, (user) => user.habits)
  owner: User;

  @OneToMany(() => Record, (record) => record.habit)
  records: Record[];

  @Column({ type: 'int', default: 0 })
  streakDays: number;

  @Column({ type: 'int', default: 0 })
  bestStreakDays: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Habit;
