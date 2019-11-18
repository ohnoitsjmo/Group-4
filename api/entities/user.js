import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';
import Order from './order'

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id

  @Column ({ type: 'varchar', unique: false })
  first

  @Column ({ type: 'varchar', unique: false })
  last

  @Column({ type: 'varchar', unique: false })
  email

  @Column({ type: 'varchar', nullable: false })
  password

  @Column({ type: 'varchar', unique: false })
  creditcard
  
  @Column({ type: 'varchar', unique: false })
  address

  @Column({ type: "varchar", unique: false })
  role

  @OneToMany(() => Order, (order) => order.user,{eager:true})
  orders
}
