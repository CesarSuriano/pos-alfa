<%@ Page Title="" Language="C#" MasterPageFile="~/Adm/MasterPage.master" AutoEventWireup="true" CodeFile="Noticia.aspx.cs" Inherits="Adm_Noticia" %>

<%@ Register Src="~/Adm/BarraEdicao.ascx" TagPrefix="uc1" TagName="BarraEdicao" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <style type="text/css">
        #TextArea1 {
            height: 113px;
            width: 233px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>

    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>

            <asp:Button ID="btnLista" runat="server" Text="Listagem" OnClick="btnLista_Click" />
            <asp:Button ID="btnCadastrar" runat="server" Text="Cadastrar" OnClick="btnCadastrar_Click" />

            <asp:MultiView ID="MultiViewNoticia" runat="server">

                <asp:View ID="tabListagem" runat="server">
                    <asp:ObjectDataSource ID="ObjectDataSource1"
                        runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetDataBy1" TypeName="DataSetTableAdapters.TbNoticiaTableAdapter">
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

                    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="not_id" DataSourceID="ObjectDataSource1" AllowSorting="True" OnSelectedIndexChanged="GridView1_SelectedIndexChanged">
                        <Columns>
                            <asp:BoundField Visible="false" DataField="not_id" HeaderText="not_id" InsertVisible="False" ReadOnly="True" SortExpression="not_id" />
                            <asp:BoundField DataField="cat_nome" HeaderText="Categoria" SortExpression="cat_nome" />

                            <asp:BoundField DataField="not_titulo" HeaderText="Titulo" SortExpression="not_titulo" />
                            <asp:BoundField DataField="not_texto" HeaderText="Noticia" SortExpression="not_texto" />                   
                            <asp:BoundField DataField="not_data" HeaderText="Data" SortExpression="not_data" />
                            <asp:BoundField DataField="not_imagem" HeaderText="Imagem" SortExpression="not_imagem" />
                            <asp:BoundField DataField="cat_id" HeaderText="Codigo da categoria" SortExpression="cat_id" />

                            <asp:CommandField HeaderText="Selecionar" SelectText="Selecionar" ButtonType="Button" ShowSelectButton="true" />
                        </Columns>
                    </asp:GridView>
                </asp:View>

                <asp:View ID="tabCadastro" runat="server">
                    <uc1:barraedicao runat="server" id="BarraEdicao" />
                    <br />
                    <asp:HiddenField ID="campoID" runat="server" />
                    Categoria:<br />
                    <asp:DropDownList ID="txtNotCategoria" runat="server" DataSourceID="ObjectDataSource2" DataTextField="cat_nome" DataValueField="cat_id">
                    </asp:DropDownList>
                    <asp:ObjectDataSource ID="ObjectDataSource2" runat="server" DeleteMethod="Delete" InsertMethod="Insert" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="DataSetTableAdapters.TbCategoriaTableAdapter" UpdateMethod="Update">
                        <DeleteParameters>
                            <asp:Parameter Name="Original_cat_id" Type="Int32" />
                        </DeleteParameters>
                        <InsertParameters>
                            <asp:Parameter Name="cat_nome" Type="String" />
                        </InsertParameters>
                        <UpdateParameters>
                            <asp:Parameter Name="cat_nome" Type="String" />
                            <asp:Parameter Name="Original_cat_id" Type="Int32" />
                        </UpdateParameters>
                    </asp:ObjectDataSource>
                    <br />
                    <br />
                    Titulo:<br />
                    <asp:TextBox ID="txtNotTitulo" runat="server"></asp:TextBox>
                    <br />
                    <br />
                    Noticia:<br />
                    <asp:TextBox ID="txtNotTexto" runat="server" Columns="100" Rows="10" TextMode="MultiLine"/><br />
                    <br />
                    Data:<br />
                    <asp:TextBox ID="txtNotData" runat="server" TextMode="DateTime"></asp:TextBox>
                    <br />
                    <br />
                    Imagem:<br />
                    <asp:TextBox ID="txtNotImagem" runat="server" TextMode="Url"></asp:TextBox>
                    <br />
                    <br />
                </asp:View>

            </asp:MultiView>

        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>

