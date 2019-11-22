import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Announcement {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar', unique: false })
  text

  @Column({ type: 'datetime', unique: false, default: () => "CURRENT_TIMESTAMP"})
  time

  @Column({ type: 'varchar', unique: false })
  title

  @Column({ type: 'varchar', unique: false })
  category
}
