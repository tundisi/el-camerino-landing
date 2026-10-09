import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eliminar cuenta | El Camerino",
  description: "Solicita la eliminación de tu cuenta de El Camerino y de los datos asociados.",
};

const supportEmail = "galuapps@gmail.com";
const mailto = `mailto:${supportEmail}?subject=Eliminar%20mi%20cuenta%20de%20El%20Camerino&body=Nombre%20en%20la%20app%3A%0ACorreo%20de%20la%20cuenta%3A%0A%0ASolicito%20la%20eliminaci%C3%B3n%20de%20mi%20cuenta%20de%20El%20Camerino%20y%20de%20los%20datos%20asociados.`;

export default function EliminarCuentaPage() {
  return (
    <main className="min-h-screen bg-cream text-navy">
      <header className="border-b border-navy/10 bg-navy text-cream">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-6 lg:px-10">
          <Link href="/" className="display text-2xl uppercase tracking-wide">
            El Camerino
          </Link>
          <Link href="/" className="text-sm font-semibold text-gold hover:text-cream">
            Volver al inicio
          </Link>
        </div>
      </header>
      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-gold">El Camerino</p>
        <h1 className="display mt-4 text-5xl uppercase leading-none sm:text-7xl">Eliminar tu cuenta</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/65">
          Puedes pedir que eliminemos tu cuenta de la aplicación El Camerino y los datos asociados sin volver a instalar la app. Escríbenos y nos encargamos del resto.
        </p>

        <a
          href={mailto}
          className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 font-bold !text-cream hover:bg-navy2"
        >
          Enviar solicitud por correo
        </a>

        <div className="mt-14 flex flex-col gap-12 text-base leading-8 text-navy/80">
          <section>
            <h2 className="display text-3xl uppercase text-navy">Pasos para solicitar la eliminación</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5">
              <li>
                Envía un correo a{" "}
                <a className="font-semibold text-navy underline decoration-gold underline-offset-4" href={mailto}>
                  {supportEmail}
                </a>{" "}
                desde la dirección con la que creaste la cuenta.
              </li>
              <li>Usa el asunto «Eliminar mi cuenta de El Camerino».</li>
              <li>Indica el nombre que aparece en tu perfil de la aplicación para que podamos localizar la cuenta.</li>
              <li>Espera nuestra confirmación. Si hace falta, te pediremos un dato adicional para verificar que la cuenta es tuya.</li>
            </ol>
          </section>

          <section>
            <h2 className="display text-3xl uppercase text-navy">Datos que eliminamos</h2>
            <p className="mt-4">Cuando confirmamos la solicitud, eliminamos la cuenta y los datos personales asociados:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Nombre, correo electrónico y foto de perfil.</li>
              <li>La cuenta y el acceso a la aplicación.</li>
              <li>Equipos, torneos y contenido publicados vinculados a tu perfil.</li>
              <li>Identificadores de instalación y registros técnicos asociados a tu cuenta.</li>
            </ul>
            <p className="mt-4">Completamos la eliminación en un plazo máximo de 30 días desde que verificamos tu identidad.</p>
          </section>

          <section>
            <h2 className="display text-3xl uppercase text-navy">Datos que podemos conservar</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>Copias de seguridad: se borran en un plazo adicional de hasta 90 días.</li>
              <li>
                Resultados, marcadores y tablas del torneo que forman parte del historial de la competición. Quitamos tu nombre y cualquier dato que permita identificarte.
              </li>
              <li>
                Información que debamos guardar por una obligación legal, para prevenir fraude o para proteger la seguridad del servicio. La conservamos solo el tiempo mínimo necesario y no la usamos para otro fin.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="display text-3xl uppercase text-navy">Más información</h2>
            <p className="mt-4">
              El detalle de cómo tratamos los datos está en las{" "}
              <Link href="/politicas" className="font-semibold text-navy underline decoration-gold underline-offset-4">
                políticas de El Camerino
              </Link>
              . Si tienes dudas sobre esta solicitud, escribe a{" "}
              <a className="font-semibold text-navy underline decoration-gold underline-offset-4" href={`mailto:${supportEmail}`}>
                {supportEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
      <footer className="bg-navy px-6 py-8 text-center text-sm text-muted">
        <p>© 2026 El Camerino. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
