import { Entity, Column } from 'typeorm';

@Entity({ name: 'tb_restaurantes' })
export class Restaurant {
    @Column() public address: string;
    @Column() public categories: string;
    @Column() public city: string;
    @Column() public claimed: string;
    @Column() public country: string;
    @Column() public cuisines: string;
    @Column() public dateOpened: string;
    @Column() public dateUpdated: string;
    @Column() public descriptions: string;
    @Column() public facebookPageURL: string;
    @Column() public features: string;
    @Column() public hours: string;
    @Column() public images: string;
    @Column() public isClosed: string;
    @Column() public key: string;
    @Column({name: 'lat'}) public latitude: number;
    @Column() public languages: string;
    @Column({name: 'long'}) public longetude: number;
    @Column() public menus: string;
    @Column() public menuURL: string;
    @Column() public name: string;
    @Column() public paymentTypes: string;
    @Column() public phones: string;
    @Column() public postalCode: string;
    @Column() public priceRange: string;
    @Column() public province: string;
    @Column() public sic: string;
    @Column() public twitter: string;
    @Column() public websites: string;
}