<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    
    <form id="form1" runat="server">
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="not_id" DataSourceID="ObjectDataSource1">
            <Columns>
                <asp:BoundField DataField="not_titulo" HeaderText="Titulo" SortExpression="not_titulo" />
                <asp:BoundField DataField="not_texto" HeaderText="Noticia" SortExpression="not_texto" />
                <asp:BoundField DataField="not_data" HeaderText="Data" SortExpression="not_data" />
            </Columns>
        </asp:GridView>
                    <asp:ObjectDataSource ID="ObjectDataSource1"
                        runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetDataBy1" TypeName="DataSetTableAdapters.TbNoticiaTableAdapter" DeleteMethod="Delete" InsertMethod="Insert" UpdateMethod="Update">
                        <DeleteParameters>
                            <asp:Parameter Name="Original_not_id" Type="Int32" />
                        </DeleteParameters>
                        <InsertParameters>
                            <asp:Parameter Name="not_titulo" Type="String" />
                            <asp:Parameter Name="not_texto" Type="String" />
                            <asp:Parameter Name="not_data" Type="DateTime" />
                            <asp:Parameter Name="not_imagem" Type="String" />
                            <asp:Parameter Name="cat_id" Type="Int32" />
                        </InsertParameters>
                        <UpdateParameters>
                            <asp:Parameter Name="not_titulo" Type="String" />
                            <asp:Parameter Name="not_texto" Type="String" />
                            <asp:Parameter Name="not_data" Type="DateTime" />
                            <asp:Parameter Name="not_imagem" Type="String" />
                            <asp:Parameter Name="cat_id" Type="Int32" />
                            <asp:Parameter Name="Original_not_id" Type="Int32" />
                        </UpdateParameters>
        </asp:ObjectDataSource>

                    </form>
    
</body>
</html>
