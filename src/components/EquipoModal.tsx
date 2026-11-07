import React, { useState } from 'react';
import { X, Users, Rocket, Plus, Trash2, Save, RotateCcw, Check, ExternalLink, Code } from 'lucide-react';
import { TeamConfig, initialTeamConfig } from '../data/researchData';

interface EquipoModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamConfig: TeamConfig;
  onSaveTeamConfig: (updated: TeamConfig) => void;
}

export const EquipoModal: React.FC<EquipoModalProps> = ({
  isOpen,
  onClose,
  teamConfig,
  onSaveTeamConfig,
}) => {
  const [activeTab, setActiveTab] = useState<'equipo' | 'vercel'>('equipo');
  const [formData, setFormData] = useState<TeamConfig>(teamConfig);
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleMemberChange = (index: number, field: 'name' | 'role' | 'email', value: string) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setFormData({ ...formData, members: updatedMembers });
  };

  const handleAddMember = () => {
    if (formData.members.length >= 6) return;
    setFormData({
      ...formData,
      members: [...formData.members, { name: '', role: 'Investigador(a)', email: '' }],
    });
  };

  const handleRemoveMember = (index: number) => {
    if (formData.members.length <= 1) return;
    const updated = formData.members.filter((_, i) => i !== index);
    setFormData({ ...formData, members: updated });
  };

  const handleSave = () => {
    onSaveTeamConfig(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleReset = () => {
    setFormData(initialTeamConfig);
    onSaveTeamConfig(initialTeamConfig);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />
            <h3 className="font-editorial text-lg font-bold text-stone-900 dark:text-stone-100">
              Gestión del Equipo Académico y Despliegue
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Subtabs */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 px-6 bg-white dark:bg-stone-900">
          <button
            onClick={() => setActiveTab('equipo')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'equipo'
                ? 'border-indigo-600 text-indigo-700 dark:text-indigo-400'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            Ficha de Autores e Institución
          </button>
          <button
            onClick={() => setActiveTab('vercel')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'vercel'
                ? 'border-indigo-600 text-indigo-700 dark:text-indigo-400'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>Guía de Despliegue en Vercel</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {activeTab === 'equipo' ? (
            <div className="space-y-6">
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Edite los datos del grupo (3 a 5 integrantes), docente y asignatura para personalizar la carátula y el pie de página de la entrega académica. Los cambios se guardan localmente en su navegador.
              </p>

              {/* Institutional Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/80 dark:border-stone-800/80">
                <div className="space-y-1">
                  <label className="block text-stone-500 font-medium">Institución / Universidad</label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-stone-500 font-medium">Facultad / Escuela Profesional</label>
                  <input
                    type="text"
                    value={formData.faculty}
                    onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                    className="w-full px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-stone-500 font-medium">Asignatura / Curso</label>
                  <input
                    type="text"
                    value={formData.courseName}
                    onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                    className="w-full px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-stone-500 font-medium">Docente / Asesor Metodológico</label>
                  <input
                    type="text"
                    value={formData.teacher}
                    onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
                    className="w-full px-3 py-1.5 rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100"
                  />
                </div>
              </div>

              {/* Members List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-800 dark:text-stone-200">
                    Integrantes del Equipo de Investigación ({formData.members.length}/5)
                  </span>
                  {formData.members.length < 5 && (
                    <button
                      onClick={handleAddMember}
                      className="inline-flex items-center gap-1 text-indigo-700 dark:text-indigo-400 font-semibold hover:underline"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Agregar integrante</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2.5">
                  {formData.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900"
                    >
                      <span className="font-mono text-stone-400 w-5 text-center">{idx + 1}.</span>
                      <input
                        type="text"
                        placeholder="Nombre completo"
                        value={member.name}
                        onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                        className="flex-1 px-2.5 py-1 rounded border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                      />
                      <input
                        type="text"
                        placeholder="Rol metodológico"
                        value={member.role}
                        onChange={(e) => handleMemberChange(idx, 'role', e.target.value)}
                        className="w-48 px-2.5 py-1 rounded border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                      />
                      {formData.members.length > 1 && (
                        <button
                          onClick={() => handleRemoveMember(idx)}
                          className="p-1 text-rose-500 hover:text-rose-700 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/60 space-y-2">
                <span className="font-bold text-indigo-900 dark:text-indigo-300 block">
                  Configuración para Despliegue en Vercel Completada
                </span>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  Este proyecto ya incluye el archivo <code className="px-1.5 py-0.5 bg-white dark:bg-stone-800 rounded font-mono">vercel.json</code> con reescritura de rutas limpia (clean URLs) y headers de seguridad para SPA.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  Opción A: Despliegue Gratuito vía GitHub (Recomendado)
                </h4>
                <ol className="space-y-2.5 list-decimal list-inside text-stone-700 dark:text-stone-300 leading-relaxed">
                  <li>
                    Crea un repositorio nuevo en tu cuenta de <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">GitHub</a>.
                  </li>
                  <li>
                    Sube el código fuente de este proyecto a la rama principal (<em>main</em>):
                    <pre className="mt-1.5 p-3 rounded-lg bg-stone-900 text-stone-100 font-mono text-[11px] overflow-x-auto">
{`git init
git add .
git commit -m "feat: Blog metodológico de Diseños de Investigación"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main`}
                    </pre>
                  </li>
                  <li>
                    Ingresa a <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">Vercel.com</a>, pulsa <strong>Add New &gt; Project</strong> e importa tu repositorio de GitHub.
                  </li>
                  <li>
                    Vercel detectará automáticamente <strong>Framework: Vite</strong> y el comando de build <code className="font-mono">npm run build</code>. Pulsa <strong>Deploy</strong> y en menos de 1 minuto tendrás tu URL pública HTTPS permanente.
                  </li>
                </ol>
              </div>

              <div className="space-y-4 pt-3 border-t border-stone-200 dark:border-stone-800">
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  Opción B: Despliegue Instantáneo desde la Terminal
                </h4>
                <p className="text-stone-600 dark:text-stone-400">
                  Si tienes instalado Node.js en tu equipo, puedes ejecutar en la raíz del proyecto:
                </p>
                <pre className="p-3 rounded-lg bg-stone-900 text-stone-100 font-mono text-[11px] overflow-x-auto">
{`npx vercel --prod`}
                </pre>
                <p className="text-stone-500 text-[11px]">
                  Sigue las 3 preguntas en consola y tu sitio quedará publicado al instante.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
          {activeTab === 'equipo' ? (
            <>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer iniciales</span>
              </button>

              <button
                onClick={handleSave}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white font-semibold transition-colors shadow-xs"
              >
                {isSaved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
                <span>{isSaved ? '¡Guardado correctamente!' : 'Guardar Cambios'}</span>
              </button>
            </>
          ) : (
            <button
              onClick={onClose}
              className="ml-auto px-4 py-2 rounded-lg bg-stone-800 dark:bg-stone-700 hover:bg-stone-900 dark:hover:bg-stone-600 text-white font-semibold transition-colors"
            >
              Cerrar Guía
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
