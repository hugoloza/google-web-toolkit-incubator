/*
 * Copyright 2008 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.google.gwt.gen2.table.client;

import com.google.gwt.gen2.table.client.TableDefinition.HTMLCellView;
import com.google.gwt.gen2.table.client.TableDefinition.TableCellView;
import com.google.gwt.user.client.ui.Widget;

/**
 * The default {@link CellRenderer} used by the {@link AbstractColumnDefinition}
 * when the user does not specify one.
 * 
 * @param <RowType> the type of the row value
 * @param <ColType> the data type of the column
 */
public class DefaultCellRenderer<RowType, ColType> implements
    CellRenderer<RowType, ColType> {
  public void renderRowValue(RowType rowValue,
      ColumnDefinition<RowType, ColType> columnDef, HTMLCellView<RowType> view) {
    Object cellValue = columnDef.getCellValue(rowValue);
    if (cellValue == null) {
      // Do nothing
    } else if (cellValue instanceof Widget) {
      view.setWidget((Widget) cellValue);
    } else {
      view.addHTML(cellValue.toString());
    }
  }

  public void renderRowValue(RowType rowValue,
      ColumnDefinition<RowType, ColType> columnDef, TableCellView<RowType> view) {
    Object cellValue = columnDef.getCellValue(rowValue);
    if (cellValue == null) {
      view.setText("");
    } else if (cellValue instanceof Widget) {
      view.setWidget((Widget) cellValue);
    } else {
      view.setHTML(cellValue.toString());
    }
  }
}