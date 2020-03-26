import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import Habit from './Habit';

export enum Score {
  BAD = 'BAD',
  SOSO = 'SOSO',
  BEST = 'BEST',
}

@Entity()
class Record extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // size 확인
  @Column({ type: 'text' })
  title: string;

  // size 확인
  @Column({ type: 'text' })
  content: string;

  @Column()
  date: Date;

  @Column({ type: 'enum', enum: Score, default: Score.SOSO })
  score: Score;

  @Column()
  habitId: number;

  @ManyToOne(() => Habit, (haibt) => haibt.records)
  habit: Habit;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Record;
