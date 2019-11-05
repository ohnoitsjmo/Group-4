import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import Product from '../entities/product'

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar', unique: false })
  name

  @ManyToMany(type => Product, product => product.categories)
  products
}
