import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Políticas y privacidad | El Camerino",
  description: "Política de privacidad, términos de uso y condiciones de El Camerino.",
};

export default function PoliticasPage() {
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
        <p className="text-sm font-bold uppercase tracking-[.2em] text-gold">Documento legal</p>
        <h1 className="display mt-4 text-5xl uppercase leading-none sm:text-7xl">Políticas de El Camerino</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/65">Última actualización: 4 de octubre de 2026</p>

        <div className="mt-14 flex flex-col gap-12 text-base leading-8 text-navy/80">
          <section>
            <h2 className="display text-3xl uppercase text-navy">1. Política de privacidad</h2>
            <p className="mt-4">El Camerino es una aplicación para organizar torneos, equipos y partidos. Esta política explica qué información recopilamos, para qué la utilizamos y qué opciones tienes sobre tus datos.</p>
          </section>
          <section>
            <h2 className="display text-3xl uppercase text-navy">2. Información que recopilamos</h2>
            <p className="mt-4">Podemos recopilar los datos que proporcionas al crear una cuenta o usar la aplicación, como nombre, correo electrónico, foto de perfil, equipo, torneo y contenido que publiques. También recibimos información técnica básica, como modelo de dispositivo, sistema operativo, identificadores de instalación y registros de errores, para mantener el servicio seguro y funcional.</p>
          </section>
          <section>
            <h2 className="display text-3xl uppercase text-navy">3. Cómo usamos la información</h2>
            <p className="mt-4">Usamos la información para crear y administrar tu cuenta, mostrar la actividad de tus equipos y torneos, permitir la comunicación entre participantes, mejorar el rendimiento de la aplicación, prevenir abusos y responder a solicitudes de soporte. No vendemos tus datos personales.</p>
          </section>
          <section>
            <h2 className="display text-3xl uppercase text-navy">4. Compartición y proveedores</h2>
            <p className="mt-4">Podemos compartir la información estrictamente necesaria con proveedores que prestan servicios de alojamiento, autenticación, analítica, almacenamiento, notificaciones y soporte. Estos proveedores solo pueden tratar los datos para prestar el servicio contratado. También podremos divulgar información cuando sea necesario para cumplir una obligación legal o proteger los derechos y la seguridad de El Camerino y sus usuarios.</p>
          </section>
          <section>
            <h2 className="display text-3xl uppercase text-navy">5. Conservación y seguridad</h2>
            <p className="mt-4">Conservamos la información mientras tu cuenta esté activa o mientras sea necesaria para prestar el servicio y cumplir obligaciones legales. Aplicamos medidas técnicas y organizativas razonables para protegerla, aunque ningún sistema conectado a internet puede garantizar seguridad absoluta.</p>
          </section>
          <section>
            <h2 className="display text-3xl uppercase text-navy">6. Tus derechos</h2>
            <p className="mt-4">Puedes solicitar acceso, corrección o eliminación de tus datos, así como retirar determinados permisos, escribiéndonos a <a className="font-semibold text-navy underline decoration-gold underline-offset-4" href="mailto:soporte@elcamerino.app">soporte@elcamerino.app</a>. Para proteger tu cuenta, podremos pedir información adicional para verificar tu identidad. También puedes eliminar tu cuenta desde la aplicación cuando esa opción esté disponible o solicitándolo por correo.</p>
          </section>
          <section>
            <h2 className="display text-3xl uppercase text-navy">7. Menores de edad</h2>
            <p className="mt-4">El Camerino no está dirigido a menores que no tengan autorización de su padre, madre o tutor legal. Si crees que un menor nos ha proporcionado datos personales sin autorización, contáctanos para que podamos revisarlo y eliminarlos cuando corresponda.</p>
          </section>
          <section>
            <h2 className="display text-3xl uppercase text-navy">8. Términos de uso</h2>
            <p className="mt-4">Debes utilizar El Camerino de forma lícita, respetuosa y conforme a las reglas de cada torneo. No está permitido suplantar identidades, publicar contenido ilegal o abusivo, interferir con el funcionamiento del servicio, intentar acceder a cuentas ajenas ni utilizar la aplicación para actividades fraudulentas. Podemos limitar o cancelar cuentas que incumplan estas condiciones.</p>
          </section>
          <section>
            <h2 className="display text-3xl uppercase text-navy">9. Contenido de usuarios</h2>
            <p className="mt-4">Conservas los derechos sobre el contenido que publiques. Al publicarlo, otorgas a El Camerino una licencia limitada, no exclusiva y mundial para alojarlo, mostrarlo y procesarlo únicamente con el fin de operar y mejorar la aplicación. Eres responsable de contar con los derechos y permisos necesarios sobre el contenido que compartas.</p>
          </section>
          <section>
            <h2 className="display text-3xl uppercase text-navy">10. Cambios y contacto</h2>
            <p className="mt-4">Podemos actualizar estas políticas para reflejar cambios legales o del servicio. Publicaremos la versión vigente en esta página e indicaremos la fecha de actualización. Si tienes preguntas sobre privacidad, términos o eliminación de cuenta, escríbenos a <a className="font-semibold text-navy underline decoration-gold underline-offset-4" href="mailto:soporte@elcamerino.app">soporte@elcamerino.app</a>.</p>
          </section>
        </div>
      </article>
      <footer className="bg-navy px-6 py-8 text-center text-sm text-muted">
        <p>© 2026 El Camerino. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
