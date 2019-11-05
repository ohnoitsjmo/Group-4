import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {User} from './user'

@Entity()
export default class Order {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'enum', enum: ["delivered", "processing", "shipping"], default: "processing" })
  status

  @Column({ type: 'float', unique: false })
  price

  @Column({ type: 'varchar', unique: false })
  status

  @ManyToOne(type => User, user => user.orders)
  user
}
