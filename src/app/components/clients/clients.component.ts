import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule, HeaderComponent, FooterComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  constructor(private dialog: MatDialog) {}

  clients = [
    {
      name: 'Shinhan Bank',
      logo: 'shinhan.svg',
      about: 'Shinhan Financial Group is the largest bank in Korea, established with a vision to create a better world through the power of finance. Shinhan is one of the most powerful banking brands in the world.'
    },
    {
      name: 'RBL',
      logo: 'rbl.png',
      about: 'RBL Bank is a private sector bank in India, formerly known as Ratnakar Bank Limited. It offers a wide range of banking services through five business verticals: Corporate Banking, Commercial Banking, Branch Banking & Retail Liabilities, Retail Assets, and Treasury & Financial Markets Operations.'
    },
    {
      name: 'Punjab & Sindh Bank',
      logo: 'assets/clients/pnb.png',
      about: 'One of the largest and oldest banks in India, providing a wide range of financial services to individuals and businesses.'
    },
    {
      name: 'Union Bank of India',
      logo: 'assets/clients/union.png',
      about: 'A prominent public sector bank offering banking, financial and investment services.'
    },
    {
      name: 'UCO Bank',
      logo: 'assets/clients/uco.png',
      about: 'A government-owned commercial bank in India that offers a range of financial services to businesses and individuals.'
    },
    {
      name: 'IDBI Bank',
      logo: 'assets/clients/idbi.png',
      about: 'A full-service bank that provides personalized banking and financial solutions.'
    },
    {
      name: 'Central Bank of India',
      logo: 'assets/clients/cbi.png',
      about: 'One of India’s oldest and largest commercial banks.'
    },
    {
      name: 'Bank of Maharashtra',
      logo: 'assets/clients/bom.png',
      about: 'A leading public sector bank offering personal banking, corporate banking, and financial services.'
    }
  ];

  openDetail(client: any) {
    this.dialog.open(ClientDetailsComponent, {
      data: client,
      width: '450px',
      panelClass: 'client-dialog'
    });
  }
}
