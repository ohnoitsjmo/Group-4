import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import User from '../entities/user';
import Product from '../entities/product'


@Entity()
export default class Order {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'enum', enum: ["delivered", "processing", "shipping"], default: "processing" })
  status

  @Column({ type: 'float', unique: false })
  price

  @ManyToOne(type => User, user => user.orders)
  user

  @ManyToMany(type => Product, product => product.orders)
  products
}
