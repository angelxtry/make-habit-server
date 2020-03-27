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
  Bad = 'BAD',
  Soso = 'SOSO',
  Best = 'BEST',
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

  @Column({ type: 'enum', enum: Score, default: Score.Soso })
  score: Score;

  @Column()
  habitId: number;

  @ManyToOne(() => Habit, (haibt) => haibt.records)
  habit: Habit;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Record;
