#pragma once

#include <vector>

#include "stats.h"
#include "unit.h"

namespace action {
struct Action;
}

namespace unit {

constexpr int VALKYR_PROTECTOR = 38392;

class ValkyrProtector : public Unit {
public:
  ValkyrProtector(const Config& config, const Stats& stats);

  action::Action nextAction(const State& state);
};

}// namespace unit