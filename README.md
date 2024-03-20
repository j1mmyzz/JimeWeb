![j1mmyzz's Stats](https://github-readme-stats.vercel.app/api?username=j1mmyzz&theme=vue-dark&show_icons=true&hide_border=true&count_private=true)
![j1mmyzz's Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=j1mmyzz&theme=vue-dark&show_icons=true&hide_border=true&layout=compact)

```
Sub RemoveDailyValues(daysRun As Integer)
    Dim ws As Worksheet
    Dim rng As Range
    Dim dailyColumn As Range
    Dim titleRow As Long
    Dim removeRows() As Integer
    Dim i As Integer
    
    ' Loop through each worksheet
    For Each ws In ThisWorkbook.Worksheets
        ' Find the title row containing "Daily" starting from row 4
        On Error Resume Next ' Resume next in case "Daily" is not found
        titleRow = ws.Range("4:4").Find("Daily", LookIn:=xlValues, lookat:=xlWhole).Row
        On Error GoTo 0 ' Turn off error handling
        
        ' If "Daily" is found in the title row
        If titleRow > 0 Then
            ' Set the range for the entire column containing "Daily"
            Set dailyColumn = ws.Columns(titleRow)
            
            ' Determine the starting row and ending row
            Dim lastRow As Long
            lastRow = ws.Cells(ws.Rows.Count, titleRow).End(xlUp).Row
            
            Dim startRow As Long
            startRow = lastRow - daysRun + 1 ' Start from the bottom and move up by daysRun
            
            ' Loop through each cell in the specified range
            For Each rng In dailyColumn.Cells(startRow + 1, 1).Resize(daysRun - 1, 1)
                ' Check if the cell value meets the condition to be removed
                If rng.Value = "SpecificValueToRemove" Then
                    ' Record the row index to remove
                    ReDim Preserve removeRows(1 To i + 1)
                    removeRows(i + 1) = rng.Row
                    i = i + 1
                End If
            Next rng
            
            ' Delete the cell contents from the row under startRow to the bottom but not the bottom
            If Not IsEmpty(removeRows) Then
                For i = UBound(removeRows) To LBound(removeRows) Step -1
                    ws.Rows(removeRows(i) + 1 & ":" & lastRow - 1).ClearContents
                Next i
            End If
        End If
    Next ws
End Sub
```
