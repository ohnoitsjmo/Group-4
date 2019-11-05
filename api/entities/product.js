import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm"
import {Category} from './category'

@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar', unique: false })
  name

  @Column({ type: 'int', unique: false })
  stock

  @Column({ type: 'varchar', unique: false })
  description

  @Column({ type: 'float', unique: false })
  price

  @Column({ type: 'int', unique: false })
  deliveryOption

  @Column({ type: 'int', unique: false })
  saleStatus

  @ManyToMany(type => Category)
  @JoinTable()
  categories
}
