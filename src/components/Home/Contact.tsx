
export default function Contact() {
    return (
        <section className="bg-white">
            <div className="contenedor">
                <h2>Contacto</h2>
                <form className="formulario">
                    <fieldset>
                        <legend>Contactanos llenando todos los campos</legend>

                            <div className="contenedor-campos">
                                <div className="campo">
                                    <label>Nombre:</label>
                                    <input id="nombre" className="input-text" type="text" placeholder="Nombre"/>
                                </div>
                                    
                                <div className="campo">
                                    <label>Telefono:</label>
                                    <input id="telefono" className="input-text" type="tel" placeholder="Telefono"/>
                                </div>

                                <div className="campo">
                                    <label>Correo:</label>
                                    <input id="email" className="input-text" type="email" placeholder="Correo Electronico"/>
                                </div>

                                <div className="campo">
                                    <label>Mensaje:</label>
                                    <textarea id="mensaje" className="input-text"></textarea>
                                </div>

                                <p>Caracteres escritos: <span id="contadorCaracteres">0</span></p>
                            </div>
                            <div className="alinear-derecha flex">
                                <input className="btn-primary" type="submit" value="Enviar"/>
                            </div>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}
