import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatDialogModule,
  MatInputModule,
  MatRadioModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatListModule,
  MatBadgeModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatSliderModule,
  MatDividerModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatListModule,
  MatBadgeModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatSliderModule,
  MatDividerModule,
  CdkTableModule,
  DragDropModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule {}
