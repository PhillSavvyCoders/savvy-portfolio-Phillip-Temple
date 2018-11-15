#ifndef __BPH_MASS_SPRING_H__
#define __BPH_MASS_SPRING_H__

#ifdef __cplusplus
extern "C" {
#endif

struct Implicit_Data;
struct Object;
struct ClothModifierData;
struct ListBase;
struct VoxelData;

typedef enum eMassSpringSolverStatus {
  BPH_SOLVER_SUCCESS              = (1 << 0),
  BPH_SOLVER_NUMERICAL_ISSUE      = (1 << 1),
  BPH_SOLVER_NO_CONVERGENCE       = (1 << 2),
  BPH_SOLVER_INVALID_INPUT        = (1 << 3),
} eMassSpringSolverStatus;

struct Implicit_Data *BPH_mass_spring_solver_create(int numverts, int numsprings);
void BPH_mass_spring_solver_free(struct Implicit_Data *id);
int BPH_mass_spring_solver_numvert(struct Implicit_Data *id);

int BPH_cloth_solver_init(struct Object *ob, struct ClothModifierData *clmd);
void BPH_cloth_solver_free(struct ClothModifierData *clmd);
int BPH_cloth_solve(struct Object *ob, float frame, struct ClothModifierData *clmd, struct ListBase *effectors);
void BKE_cloth_solver_set_positions(struct ClothModifierData *clmd);

bool BPH_cloth_solver_get_texture_data(struct Object *ob, struct ClothModifierData *clmd, struct VoxelData *vd);

#ifdef __cplusplus
}
#endif

#endif