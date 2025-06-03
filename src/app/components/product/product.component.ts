import { Component, OnInit } from '@angular/core'; // <-- add OnInit import
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  // <-- add OnInit here

  constructor(private dialog: MatDialog) {}

  products = [
    {
      title: 'Payment Middleware NGRTGS',
      description: `Enterprise-ready real-time gross settlement interface. Provides seamless integration with NGRTGS platforms for banks and financial institutions.`,
    },
    {
      title: 'Payment Middleware NACH H2H',
      description: `Automates transactions for NACH debit/credit with secure host-to-host connectivity. Ensures compliance and robust reconciliation.`,
    },
    {
      title: 'Payment Hub with Liquidity Manager',
      description: `Centralized hub for all payment channels with real-time liquidity visibility and control to optimize working capital.`,
    },
    {
      title: 'Anti-Money Laundering Solution',
      description: `Risk-based AML solution that supports KYC, transaction monitoring, sanctions screening, and regulatory reporting.`,
    },
    {
      title: 'Message Manager',
      description: `Advanced message transformation and routing engine for formats like ISO20022, MT, JSON, and proprietary schemas.`,
    },
    {
      title: 'Crypto Tool Kits',
      description: `Secure toolkit for data encryption/decryption, digital signing, certificate validation, and crypto key management.`,
    },
    {
      title: 'Bulk Upload Automation',
      description: `Facilitates bulk file uploads with validation, secure transmission, and status reporting for high-volume transactions.`,
    },
    {
      title: 'Data Localization',
      description: `Ensures sensitive data is stored within domestic boundaries per regulatory mandates, with secure access controls.`,
    },
  ];

  shakingIndex: number | null = null; // <-- new property for shake

  ngOnInit() {
    setInterval(() => {
      this.shakingIndex = Math.floor(Math.random() * this.products.length);

      setTimeout(() => {
        this.shakingIndex = null;
      }, 2000); // shake duration matches CSS animation time
    }, 4000);
  }

  openDetail(product: any) {
    this.dialog.open(ProductDetailComponent, {
      data: product,
      width: '500px',
      panelClass: 'product-dialog',
    });
  }
}
