#pragma once

#include <vector>

#include "stats.h"
#include "unit.h"

namespace action {
struct Action;
}

namespace unit {

constexpr int VALKYR_GUARDIAN = 38391;

class ValkyrGuardian : public Unit {
public:
  ValkyrGuardian(const Config& config, const Stats& stats);

  action::Action nextAction(const State& state);
};

}// namespace unit