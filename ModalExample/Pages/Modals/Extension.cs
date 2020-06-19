﻿using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ModalExample.Pages
{
    public static class Extension
    {
        public async static Task<bool> ConfirmDelete(this IJSRuntime js, string titulo, string Mensaje, string tipo)
        {
            return await js.InvokeAsync<bool>("ConfirmationPrumpt", titulo, Mensaje, tipo);
        }
        public async static Task<bool> Guardado(this IJSRuntime js, string posicion, string icono, string titulo,string texto, bool confbtn, int timer)
        {
            return await js.InvokeAsync<bool>("SavePrumpt", posicion,icono,titulo,texto,confbtn,timer);
        }
    }
}
