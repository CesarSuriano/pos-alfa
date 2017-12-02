using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace App1
{
	public partial class MainPage : ContentPage
	{
		public MainPage()
		{
			InitializeComponent();
		}

        private void Button_Clicked(object sender, EventArgs e)
        {
            //var btn = (Button)sender;

            //DisplayAlert("Clicou ", "Você clicou em "+btn.Text, "ok");
            //Navigation.PushModalAsync(new Page2());
            Application.Current.MainPage = new NavigationPage(new Page2());
        }
    }
}
