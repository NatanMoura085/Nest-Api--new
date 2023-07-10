import { Usuarios } from 'src/entities/usuarios';

export abstract class UsuariosRepository {
  abstract create(usuarios: Usuarios): Promise<void>;
}
